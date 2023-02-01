import {Component} from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
    Strange hobbies
    <hr>
    <table>
    <tr><td style={{style}}>Название хобби:</td><td>Сбор кубика Рубика на время</td></tr>
    <tr><td style={{style}}>Rраткое описание хобби</td><td>Мировая «гастроль» любимой миллионами игрушки началась в далеком 1974-м, когда венгерский архитектор и скульптор профессор Эрне Рубик, готовя для своих студентов наглядное пособие по теории групп, сам того не подозревая, создал чуть ли не самую популярную головоломку на планете, традиционно получившую имя изобретателя и превратившую своего создателя в первого миллионера Восточной Европы.</td></tr>
    </table>
    <hr>
    <button (click)="changeStyle()">Task 2</button>
    <button (click)="addImage()">AddImage</button>
    <hr>
    <div id="img"></div>
    `
})

export class AppComponent {
    style: string = ""
    image: HTMLImageElement
    imageS: boolean = false
    changeStyle(): void {
       this.style = "color: red;background: black;font-size: 15px;font-weight:600;"
    }
    addImage() {
        this.image = document.createElement('img')
        this.image.src = "https://esquire.kz/wp-content/uploads/2019/12/322d21ed462c443d5ce6af0d052a4810.jpg"
        this.image.width = 500
        let d = document.querySelector('#img')
        if (!this.imageS) {this.imageS = !0, d.insertAdjacentElement("afterbegin", this.image)}
    }
}