import { Pipe } from '@angular/core';
 
@Pipe({
  name: 'characters'
})
export class Characters {
  transform(input, chars, breakOnWord, ellipsis) {
    if (isNaN(chars)) return input;
    if (chars <= 0) return '';
    if (input && input.length > chars) {
      input = input.substring(0, chars);

      if (!breakOnWord) {
        var lastspace = input.lastIndexOf(' ');
        //get last space
        if (lastspace !== -1) {
            input = input.substr(0, lastspace);
        }
      }
      else {
        while(input.charAt(input.length-1) === ' '){
            input = input.substr(0, input.length -1);
        }
      }

      if(ellipsis) return input + '…';
      if(!ellipsis) return input;
    }
    return input;
  }

}