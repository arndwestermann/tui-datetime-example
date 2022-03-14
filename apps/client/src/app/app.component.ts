import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@tui-datetime-test/api-interfaces';
import { FormGroup, FormControl } from '@angular/forms';
import { TuiDay, TuiTime, TUI_FIRST_DAY, TUI_LAST_DAY } from '@taiga-ui/cdk';

@Component({
  selector: 'tui-datetime-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options = {
    is_readonly: false,
    increment_step: null,
    max_value: '2022-03-18',
    min_value: '2022-03-12',
    precision: null,
    unit: null,
  };

  public get minDatetime(): TuiDay | [TuiDay, TuiTime] {
    if (this.options.min_value) {
      const date = new Date(this.options.min_value);
      const day = TuiDay.fromLocalNativeDate(date);
      const time = TuiTime.fromLocalNativeDate(date);
      return [day, time];
    }

    return TUI_FIRST_DAY;
  }

  public get maxDatetime(): TuiDay | [TuiDay | null, TuiTime | null] {
    if (this.options.max_value) {
      const date = new Date(this.options.max_value);
      const day = TuiDay.fromLocalNativeDate(date);
      const time = TuiTime.fromLocalNativeDate(date);
      return [day, time];
    }

    return TUI_LAST_DAY;
  }
  readonly testForm = new FormGroup({
    testValue: new FormControl([new TuiDay(2017, 2, 15), null]),
  });
}
