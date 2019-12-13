import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FileExplorerModule } from "./file-explorer/file-explorer.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FileExplorerModule, FlexLayoutModule, MatCardModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
