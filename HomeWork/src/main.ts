import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// describe component
@Component({
  selector: 'app-root', // component name used in markup
  standalone: true, // component is self-contained
  styleUrls: ['./app/app.comp.less'],
  template: // the component's markup
  `
  <button (click)="cite = newCite()">Сгенерировать фразу Билла Гейтса</button> 
  <blockquote class="cite">
    <p>{{cite}}</p>
    <footer>— <cite>Билл Гейтс</cite></footer>
  </blockquote>
  `,
})

// export component
export class AddOneButtonComponent {
  cite = "Я не был среди первых в моем университете, но все, кто был среди первых, работают в моей компании Microsoft";
  
  newCite() {
    let cites = [
      'Успех – плохой учитель. Он заставляет умных людей думать, что они не могут проиграть',
      'Каждому нужен тренер. Неважно, баскетболист ли вы, теннисист, гимнаст или игрок в бридж',
      'Я могу понять желание иметь миллионы долларов, с ними приходит определенная свобода, значимая свобода. Но если вы выйдете за рамки этого, я должен вам сказать, что это тот же гамбургер',
      'Телевидение – это не настоящая жизнь. В реальной жизни людям действительно приходится выходить из кафе и идти на работу',
      'Праздновать успех – это нормально, но важнее усвоить уроки неудач',
      'Будьте вежливы с ботаниками. Скорее всего, вы в конечном итоге будете работать на одного из них',
      'Жизнь несправедлива, привыкай!',
      'Для тяжелой работы я выбираю ленивого человека. Потому что ленивый человек найдет простой способ сделать это',
      'Мы всегда переоцениваем изменения, которые произойдут в следующие два года, и недооцениваем изменения, которые произойдут в следующие десять. Не позволяйте убаюкивать себя бездействием',
      'Если вы не можете сделать что-то хорошо, по крайней мере, сделайте так, чтобы оно хорошо выглядело',
      'Жизнь не делится на семестры. У вас нет летних каникул, и очень немногие работодатели заинтересованы в том, чтобы вам помогать. Найдите себя',
      'Я не был среди первых в моем университете, но все, кто был среди первых, работают в моей компании Microsoft',
      'Я твердо верю, что любой инструмент, улучшающий общение, имеет огромное влияние на то, как люди могут учиться друг у друга и как они могут достичь тех высот, которые им интересны',
      'В детстве я действительно много мечтал, и я думаю, что во многом это из-за того, что у меня была возможность много читать',
      'Ожидания – форма первоклассной истины: если люди в них верят, это правда',
      'В офисе, дома или в дороге у меня всегда есть стопка книг, читать которые я жду с нетерпением',
      'Кто решает, что в Windows? Клиенты, которые его покупают',
      'Путь к успеху в мире программного обеспечения – это разработка революционного программного обеспечения, и поэтому, будь то Microsoft Office или Windows, это двигает нас вперед. Новые идеи, удивляющие рынок, хорошая инженерия и хороший бизнес – одно и то же',
      'Нам всем нужны люди, которые дают нам обратную связь. Так мы становимся лучше',
      'Терпение – ключевой элемент успеха',
      'Не сравнивайте себя ни с кем в этом мире… если вы так поступаете, вы оскорбляете себя',
      'В будущем столетии лидерами будут те, кто расширяет возможности других',
      'Если считать электронную почту, я в Интернете целый день, каждый день',
      'Если ваша культура не любит вундеркиндов, у вас большие проблемы',
      'Люди всегда боятся перемен. Люди боялись электричества, когда его изобрели, не так ли?',
      'Я ни с кем не соревнуюсь, кроме себя',
      'Инновации движутся пугающе быстрыми темпами',
      "’Я не знаю’ превратилось в ‘я еще не знаю’",
      'Netscape мог заставить правительство работать в своих интересах'
    ]
    this.cite = cites[Math.floor(Math.random() * cites.length)]
    console.log(this.cite)
    return cites[Math.floor(Math.random() * cites.length)]
  }
}

bootstrapApplication(AddOneButtonComponent);