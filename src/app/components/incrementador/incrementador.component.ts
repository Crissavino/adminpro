import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-incrementador',
    templateUrl: './incrementador.component.html',
    styles: [
    ]
})
export class IncrementadorComponent implements OnInit {

    @ViewChild('txtProgress') txtProgress: ElementRef;

    @Input('nombre') leyenda: string = 'Leyenda';
    @Input() progress: number = 30;

    @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

    constructor() {
        // console.log('Leyenda', this.leyenda);
        // console.log('Progreso', this.progress);
    }

    ngOnInit(): void {
        // console.log('Leyenda', this.leyenda);
        // console.log('Progreso', this.progress);
    }

    onChanges( newValue: number){

        if (newValue >= 100) {
            this.progress = 100;
        } else if (newValue <= 0){
            this.progress = 0;
        } else {
            this.progress = newValue;
        }

        this.txtProgress.nativeElement.value = this.progress;

        this.cambioValor.emit( this.progress );

    }

    cambiarValor( valor: number ){
        if (this.progress >= 100 && valor > 0) {
            this.progress = 100;
            return;
        }

        if (this.progress <= 0 && valor < 0) {
            this.progress = 0;
            return;
        }

        this.progress += valor;

        this.cambioValor.emit(this.progress);

        this.txtProgress.nativeElement.focus();
    }

}
