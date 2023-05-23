import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_application_2/models/usuarios.dart';
import 'package:http/http.dart ' as http;

class PagesUsuarios extends StatefulWidget {
  const PagesUsuarios({super.key});

  @override
  State<PagesUsuarios> createState() => _PagesUsuariosState();
}

class _PagesUsuariosState extends State<PagesUsuarios> {
  final url = Uri.parse("http://10.0.2.2:3000/Api/v1/Users");
  late Future<List<Usuarios>> usuarios;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Usuario'),
        ),
        body: FutureBuilder<List<Usuarios>>(
          future: usuarios,
          builder: (context, snap) {
            if (snap.hasData) {
              return ListView.builder(
                itemCount: snap.data!.length,
                itemBuilder: (context, i) {
                  return ListTile(
                    title: Text("Email: " + snap.data![i].email),
                    //subtitle: Text("Email: " + snap.data![i].),
                  );
                },
              );
            }
            if (snap.hasError) {
              return const Center(
                child: Text("Se Presento un error"),
              );
            }
            return const CircularProgressIndicator();
          },
        ));
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    usuarios = getUsuarios();
  }

  Future<List<Usuarios>> getUsuarios() async {
    final res = await http.get(url);
    final lista = List.from(jsonDecode(res.body));

    List<Usuarios> usuarios = [];
    for (var element in lista) {
      final Usuarios user = Usuarios.fromJson(element);
      usuarios.add(user);
    }

    return usuarios;
  }
}
