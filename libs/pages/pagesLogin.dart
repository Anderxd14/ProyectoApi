import 'package:flutter/material.dart';
import 'package:flutter_application_2/pages/PagesRcontra.dart';
import 'package:flutter_application_2/pages/menu.dart';
import 'package:http/http.dart ' as http;

class MyFormPage extends StatefulWidget {
  const MyFormPage({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _MyFormPageState createState() => _MyFormPageState();
}

class _MyFormPageState extends State<MyFormPage> {
  final _formKey = GlobalKey<FormState>();
  final url = Uri.parse("http://10.0.2.2:3000/Api/v1/Users");
  String name = '';
  String email = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Iniciar sesion'),
      ),
      body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              /*Image.asset(
                'logo.png',
                width: 100,
                height: 100,
              ),*/
              Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    TextFormField(
                      decoration: const InputDecoration(
                        icon: Icon(Icons.email),
                        hintText: 'Ejemplo@gmail.com',
                        labelText: 'Email',
                      ),
                      validator: (value) {
                        if (value!.isEmpty) {
                          return 'Por favor, ingresa tu Email';
                        }
                        return null;
                      },
                      onSaved: (value) {
                        name = value!;
                      },
                    ),
                    TextFormField(
                      decoration: const InputDecoration(
                        icon: Icon(Icons.password),
                        labelText: 'Contraseña',
                      ),
                      validator: (value) {
                        if (value!.isEmpty) {
                          return 'Por favor, ingresa tu contraseña';
                        }
                        return null;
                      },
                      onSaved: (value) {
                        email = value!;
                      },
                    ),
                    Padding(
                        padding: const EdgeInsets.symmetric(vertical: 16.0),
                        child: Center(
                          child: ElevatedButton(
                            onPressed: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => const PagesMenu(),
                                ),
                              );
                            },
                            style: const ButtonStyle(),
                            child: const Text('Iniciar Sesion'),
                          ),
                        )),
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 16.0),
                      child: TextButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const PagesRcontra(),
                            ),
                          );
                        },
                        style: const ButtonStyle(),
                        child: const Text('Olvide mi contraseña'),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          )),
    );
  }
}
