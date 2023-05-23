import 'package:flutter/material.dart';
import 'package:flutter_application_2/pages/pagesHumedad.dart';
import 'package:flutter_application_2/pages/pagesPlantas.dart';
import 'package:flutter_application_2/pages/pagesUser.dart';

class PagesMenu extends StatelessWidget {
  const PagesMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: Colors.white10,
      ),

      debugShowCheckedModeBanner: false, // Remove the debug banner
      home: Scaffold(
        backgroundColor: const Color(0xFFFBF8EF),
        appBar: AppBar(
          title: const Text('Bienvenido'),
        ),
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            //crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Image.asset(
                'assets/logo.png',
                width: 200,
                height: 200,
                fit: BoxFit.cover,
              ),
              const SizedBox(height: 10),
              Container(
                height: 100,
              ),
              Text(
                "Hola",
                style: TextStyle(color: Colors.black, fontSize: 50),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 10),
              Text(
                "(Usuario)",
                style: TextStyle(color: Colors.black, fontSize: 60),
                textAlign: TextAlign.end,
              ),
              const SizedBox(height: 40),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  OutlinedButton(
                    style: OutlinedButton.styleFrom(
                      side: BorderSide(color: Color(0xFFFBF8EF)),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => PagesUsuarios(),
                        ),
                      );
                    },
                    child: Image.asset(
                      'assets/usu.png',
                      width: 60,
                      height: 60,
                      fit: BoxFit.cover,
                    ),
                  ),
                  OutlinedButton(
                    style: OutlinedButton.styleFrom(
                      side: BorderSide(color: Color(0xFFFBF8EF)),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => PagesHumedad(),
                        ),
                      );
                    },
                    child: Image.asset(
                      'assets/hu.png',
                      width: 60,
                      height: 60,
                      fit: BoxFit.cover,
                    ),
                  ),
                  OutlinedButton(
                    style: OutlinedButton.styleFrom(
                      side: BorderSide(color: Color(0xFFFBF8EF)),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => PagesPlantas(),
                        ),
                      );
                    },
                    child: Image.asset(
                      'assets/pla.png',
                      width: 60,
                      height: 60,
                      fit: BoxFit.cover,
                    ),
                  ),
                  Container(
                    height: 100,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
