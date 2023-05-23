import 'package:flutter/material.dart';
import 'package:flutter_application_2/pages/formUsuarios.dart';
import 'package:flutter_application_2/pages/pagesLogin.dart';

class PagesPortada extends StatefulWidget {
  const PagesPortada({super.key});

  @override
  State<PagesPortada> createState() => _PagesPortadaState();
}

class _PagesPortadaState extends State<PagesPortada> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('EcoRoot'),
      ),
      body: Stack(
        children: [
          Image.asset(
            'assets/PlantaF.png',
            width: 400,
            height: 740,
            fit: BoxFit.cover,
          ),
        ],
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Image.asset(
            'assets/logo.png',
            width: 200,
            height: 200,
            fit: BoxFit.cover,
          ),
          Container(
            height: 150,
          ),
          Container(
              alignment: Alignment.center,
              child: OutlinedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => const MyFormPage()),
                    );
                  },
                  child: Container(
                    // Ancho deseado
                    height: 50, // Alto deseado

                    //margin: const EdgeInsets.all(150),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: const Color(0xFF04D0D9),
                      border: Border.all(
                        color: const Color(0xFF04D0D9),
                        width: 0,
                      ),
                      borderRadius: BorderRadius.circular(15),
                    ),
                    padding: const EdgeInsets.all(1),
                    child: const Text("Login",
                        style:
                            TextStyle(color: Color(0xFFFBF8EF), fontSize: 20)),
                  ))),
          SizedBox(height: 50),
          Container(
              alignment: Alignment.center,
              child: OutlinedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => const FormUsuarios()),
                    );
                  },
                  child: Container(
                    // Ancho deseado
                    height: 50, // Alto deseado

                    //margin: const EdgeInsets.all(150),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: const Color(0xFF04D0D9),
                      border: Border.all(
                        color: const Color(0xFF04D0D9),
                        width: 0,
                      ),
                      borderRadius: BorderRadius.circular(15),
                    ),
                    padding: const EdgeInsets.all(1),
                    child: const Text("registrarse",
                        style:
                            TextStyle(color: Color(0xFFFBF8EF), fontSize: 20)),
                  ))),
          Container(
            height: 100,
          ),
        ],
      ),
    );
  }
}
