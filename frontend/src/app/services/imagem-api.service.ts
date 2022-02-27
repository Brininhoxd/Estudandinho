import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

interface ImagemInfos {
  author: string
  download_url: string
  height: number
  id: string
  url: string
  width: number
}

export interface ImagemRetorno {
  url: string
  autor: string
}

@Injectable({
  providedIn: 'root'
})
export class ImagemApiService {

  constructor(
    private globalService: GlobalService,
    private http: HttpClient) { }

  private baseUrl = 'https://picsum.photos/'

  public getInfoImagem(tamanho: number): Observable<ImagemRetorno> {

    return this.http.get<ImagemInfos>(`${this.baseUrl}/id/${this.globalService.retornaNumeroAleatorio(0, 500)}/info`).pipe(
      map((obj) => {
        const autor = obj.author
        const url = `https://picsum.photos/id/${obj.id}/${tamanho}`
        const retorno: ImagemRetorno = {
          autor: autor,
          url: url
        }
        return retorno
      }),
      catchError(e => this.getInfoImagem(tamanho))
    )
  }

}

