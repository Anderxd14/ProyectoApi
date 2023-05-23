import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_application_2/models/Plantas.dart';
import 'package:http/http.dart' as http;

class PagesPlantas extends StatefulWidget {
  const PagesPlantas({super.key});

  @override
  State<PagesPlantas> createState() => _PagesPlantasState();
}

class _PagesPlantasState extends State<PagesPlantas> {
  final url = Uri.parse("http://10.0.2.2:3000/Api/v1/Plantas");
  final headers = {"content-type": "application/json;charset=utf-8"};
  final _formKey = GlobalKey<FormState>();
  late Future<List<Plantas>> plantas;
  final nameP = TextEditingController();
  // ignore: non_constant_identifier_names
  final jardineroId = TextEditingController();
  final DescriP = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Nueva planta'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
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
                          TextField(
                            controller: nameP,
                            decoration: const InputDecoration(
                              hintText: 'Planta1',
                              labelText: 'Nombre Planta',
                            ),
                            //validator: (value) {},
                          ),
                          TextField(
                            controller: DescriP,
                            decoration: const InputDecoration(
                              hintText: 'descripción',
                              labelText: 'Ingres una descripción',
                            ),
                          ),
                          TextField(
                            controller: jardineroId,
                            decoration: const InputDecoration(
                              hintText: 'jardinero',
                              labelText: 'jardinero',
                            ),
                          ),
                          Padding(
                              padding:
                                  const EdgeInsets.symmetric(vertical: 16.0),
                              child: Center(
                                child: TextButton(
                                  onPressed: () {
                                    savePlanta();
                                  },
                                  style: const ButtonStyle(),
                                  child: const Text('Registrate'),
                                ),
                              )),
                        ],
                      ),
                    ),
                  ],
                )),
          ],
        ),
      ),
    );
  }

  void savePlanta() async {
    final planta = {
      "nameP": nameP.text,
      "DescriP": DescriP.text,
      "jardineroId": jardineroId.text
    };
    await http.post(url, headers: headers, body: jsonEncode(planta));
    nameP.clear();
    DescriP.clear();
  }
}
