import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn:'root'
})
export class SnackBar{
    constructor(private _snackBar:MatSnackBar){

    }
    openSnackBar(msg: string, close: () => void){
        this._snackBar.open(msg, "close",{
            horizontalPosition:'center',
            verticalPosition:'bottom',
            duration:3000
        })
    }
}