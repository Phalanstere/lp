
class Repeater {
  constructor(props) {

    // number of repetitions
    this.frequency = 3;

    // number of elements
    this.noElements = null;

    // number of elements that shall be displayed simultaneously
    this.noDisplayed = null;
    

    // variation
    this.variation = null;

    // if set to true, there will be a loop
    this.automated = false;


    if (props.frequency) this.frequency = props.frequency;
    if (props.noElements) this.noElements = props.noElements;
    if (props.noDisplayed) this.noDisplayed = props.noDisplayed;
    if (props.variation) this.variation = props.variation;

    // the list that holds the elements
    this.list = [];

    // the elements that are actually selected
    this.actual = [];
    this.createList();

    // the callback function
     if (props.onChange) this.onChange = props.onChange;

  }


  // create list
  createList() {
      for (var i = 0; i < this.noElements; i++) {
          var el = {
              freq: 0,
              id: i
          };

      this.list.push(el);    
    }
    this.selectElements();    
  }

  // select the elements that shall be displayed
  selectElements() {
    this.actual = [];

    for (var i = 0; i < this.noDisplayed; i++) {
        this.list.ct ++;
        this.actual.push ( this.list[i].id );
    }


    console.log( this.onChange );
    // this.onChange.call( this.actual );
  }


  loop() {

  }

}




export default Repeater;