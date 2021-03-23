import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

const MaterialComponents = [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
