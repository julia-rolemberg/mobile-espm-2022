import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:ven_carro/veiculo.dart';

class ListaVeiculo extends StatefulWidget {
  @override
  State<ListaVeiculo> createState() => _ListaVeiculoState();

}

const URL_BASE = 'https://parallelum.com.br/fipe/api/v1/carros';

class _ListaVeiculoState extends State<ListaVeiculo> {

  List<Veiculo> veiculos = [];
  Veiculo veiculoSelecionado = Veiculo();

  @override
  void initState() {
    super.initState();


    http.get(Uri.parse(URL_BASE + '/marcas')).then((resposta) {

      final marcas = jsonDecode(resposta.body);
      marcas.forEach((item) {

        setState(() {
          veiculos.add(Veiculo(idMarca: item['codigo'], marca: item['nome']));
        } );
      
    });
  });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: Scaffold(appBar: AppBar(title: const Text('VenCarro')),
    body: ListView.builder(itemCount: veiculos.length, 
                           itemBuilder: (context, idx) {
                              return ListTile(
                                title: Column (children: [Text(veiculos[idx].marca), 
                                                          Text(veiculos[idx].modelo),
                                                          Text(veiculos[idx].ano)]),
                              tileColor: idx % 2 == 0 ? Colors.green[100] : Colors.white,
                              leading: const Icon(Icons.directions_car),
                              trailing: const Icon(Icons.navigate_next),
                              onTap: (){
                                veiculoSelecionado = veiculos[idx];


                                if (veiculoSelecionado.idModelo == '') {

                                     // https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos
                                     final urlModelos = URL_BASE + '/marcas/${veiculoSelecionado.idMarca}/modelos';

                                     http.get(Uri.parse(urlModelos)).then((resposta) {
                                      final modelos = jsonDecode(resposta.body);
                                       veiculos.clear();
                                      modelos['modelos'].forEach((item) {
                                       
                                        setState(() {
                                          veiculos.add(Veiculo(idMarca: veiculoSelecionado.idMarca, 
                                          marca: veiculoSelecionado.marca,
                                          idModelo: "${item['codigo']}",
                                          modelo: item['nome']
                                          ));
                                        } );
                                      
                                    });
                                }); 

                                } else if (veiculoSelecionado.idMarca != '' && veiculoSelecionado.idModelo != '' && veiculoSelecionado.idAno == ''){
                                // https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos
                                final urlAnos = URL_BASE + '/marcas/${veiculoSelecionado.idMarca}/modelos/${veiculoSelecionado.idModelo}/anos';

                                     http.get(Uri.parse(urlAnos)).then((resposta) {
                                      final anos = jsonDecode(resposta.body);
                                       veiculos.clear();
                                      anos.forEach((item) {
                                       
                                        setState(() {
                                          veiculos.add(Veiculo(idMarca: veiculoSelecionado.idMarca, 
                                          marca: veiculoSelecionado.marca,
                                          idModelo: veiculoSelecionado.idModelo,
                                          modelo: veiculoSelecionado.modelo,
                                          idAno: item['codigo'],
                                          ano: item['nome']
                                          ));
                                        } );
                                      
                                    });
                                });
                                } else if (veiculoSelecionado.idAno != '') {
                                  
                                  //https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3
                                final urlPreco = URL_BASE + '/marcas/${veiculoSelecionado.idMarca}/modelos/${veiculoSelecionado.idModelo}/anos/${veiculoSelecionado.idAno}';

                                     http.get(Uri.parse(urlPreco)).then((resposta) {
                                      final preco = jsonDecode(resposta.body);
                                          print('${preco}');
                        
                                });


                                }


                              });
                           })
    )
    );
  }

}