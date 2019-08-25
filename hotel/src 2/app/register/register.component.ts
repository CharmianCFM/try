import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //$("input").placeholder();
 /*   var F=$(".form_head > li"),c=$(".form_body");
    F.parent().append('<span class="tab_active"></span>');
    F.each(function(i){
      $(this).click(
        function(){
          $(this).not(":visible")?($(this).addClass("active").siblings().removeClass("active"),
            $(this).siblings(".tab_active")
              .stop().
              animate(
              {
                left:$(this).
                offsetParent().
                context.offsetLeft
              },400),
            c.eq(i).show().siblings(".form_body").hide(),
            g.setClear(),
            v.setClear()):($(this).addClass("active").siblings().removeClass("active"),
            c.eq(i).show().siblings(".form_body").hide())};
      )};),   */
  }

}
