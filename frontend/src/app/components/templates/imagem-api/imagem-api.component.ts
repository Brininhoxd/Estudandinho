import { ImagemApiService } from './../../../services/imagem-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem-api',
  templateUrl: './imagem-api.component.html',
  styleUrls: ['./imagem-api.component.scss']
})
export class ImagemApiComponent implements OnInit {

  constructor(private imagemApiService: ImagemApiService) { }

  @Input()
  public temAutor: boolean = false

  @Input()
  public tamanho: number = 400

  public autor: string = ''
  public urlImagem = ''

  ngOnInit(): void {
    this.imagemApiService.getInfoImagem(this.tamanho).subscribe(retorno => {
      this.urlImagem = retorno.url
      this.autor = retorno.autor
    })

  }

}
