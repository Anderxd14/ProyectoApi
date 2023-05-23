import 'package:flutter/material.dart';

class Usuarios {
  final int id;
  final String email;
  //final String createdAT;

  Usuarios({
    required this.id,
    required this.email,
    //required this.createdAT,
  });

  factory Usuarios.fromJson(Map<String, dynamic> json) {
    return Usuarios(
      id: json['id'],
      email: json['email'],
      //createdAT: json['created_at'],
    );
  }
}
