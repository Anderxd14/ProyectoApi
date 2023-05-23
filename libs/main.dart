import 'package:flutter/material.dart';
import 'package:flutter_application_1/pages/formUsuarios.dart';
import 'package:flutter_application_1/pages/pagesHumedad.dart';
import 'package:flutter_application_1/pages/pagesUser.dart';
import 'package:flutter_application_1/pages/pagesLogin.dart';
import 'package:flutter_application_1/pages/pagesPortal.dart';
import 'package:flutter_application_1/pages/pagesPlantas.dart';
import 'package:flutter_application_1/pages/menu.dart';
import 'package:flutter_application_1/pages/PagesRcontra.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'MyFormPage',
        home: PagesPortada(),
      );
}
