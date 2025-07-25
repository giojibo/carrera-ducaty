import { Component } from '@angular/core';

@Component({
  selector: 'app-politica-privacidad-screen',
  templateUrl: './politica-privacidad-screen.component.html',
  styleUrls: ['./politica-privacidad-screen.component.scss']
})
export class PoliticaPrivacidadScreenComponent {

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

}
