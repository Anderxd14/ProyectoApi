import 'dart:convert';
import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
import 'package:flutter_application_2/models/regHumedad.dart';

class PagesHumedad extends StatefulWidget {
  const PagesHumedad({super.key});

  @override
  State<PagesHumedad> createState() => _PagesHumedadState();
}

class _PagesHumedadState extends State<PagesHumedad> {
  final url = Uri.parse("http://10.0.2.2:3000/Api/v1/Humedad");
  late Future<List<HumedadData>> humedad;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Humedad'),
        ),
        body: FutureBuilder<List<HumedadData>>(
          future: humedad,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              final humedadDataList = snapshot.data!;
              return SingleChildScrollView(
                child: DataTable(
                  columns: [
                    const DataColumn(label: Text('RegHumedad')),
                    const DataColumn(label: Text('ValorHumedad')),
                    const DataColumn(label: Text('FechaReg')),
                  ],
                  rows: humedadDataList.map((humedadData) {
                    return DataRow(cells: [
                      DataCell(Text('${humedadData.id}')),
                      DataCell(Text('${humedadData.reghumedad}')),
                      DataCell(Text(humedadData.createdAt)),
                    ]);
                  }).toList(),
                ),
              );
            } else {
              return const CircularProgressIndicator();
            }
          },
        ));
  }

  @override
  void initState() {
    //TODO: implement initState
    super.initState();
    humedad = getHumedad();
  }

  Future<List<HumedadData>> getHumedad() async {
    final res = await http.get(url);
    final lista = List.from(jsonDecode(res.body));

    List<HumedadData> humedad = [];
    for (var element in lista) {
      final HumedadData hum = HumedadData.fromJson(element);
      humedad.add(hum);
    }

    // ignore: avoid_print

    return humedad;
  }
}
