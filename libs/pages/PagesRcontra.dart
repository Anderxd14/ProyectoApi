import 'package:flutter/material.dart';

class PagesRcontra extends StatefulWidget {
  const PagesRcontra({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _MyPagesRcontra createState() => _MyPagesRcontra();
}

class _MyPagesRcontra extends State<PagesRcontra> {
  final _formKey = GlobalKey<FormState>();
  final url = Uri.parse("http://10.0.2.2:3000/Api/v1/Users");
  String name = '';
  String email = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Recuperar contraseña'),
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
                    Padding(
                        padding: const EdgeInsets.symmetric(vertical: 16.0),
                        child: Center(
                          child: ElevatedButton(
                            onPressed: () {},
                            style: const ButtonStyle(),
                            child: const Text('Enviar link'),
                          ),
                        )),
                  ],
                ),
              ),
            ],
          )),
    );
  }
}
