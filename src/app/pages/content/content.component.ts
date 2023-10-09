import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
import { SmallCardComponent } from '../../components/small-card/small-card.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', '../../components/small-card/small-card.component.css']
})
export class ContentComponent implements OnInit {

  photoCoverMain:string = ""
  contentTitleMain:string = ""
  contentDescriptionMain:string = ""
  Id:string | null = "0"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.photoCoverMain = result.photoCover;
    this.contentTitleMain = result.title;
    this.contentDescriptionMain = result.description;
    this.Id = result.id.toString()
  }

}
