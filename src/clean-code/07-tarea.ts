(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {

        public value: string;
        public placeholder: string;

        constructor(
            value: string,
            placeholder: string,
        ) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};

    }


    class InputElement {
        public element: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(
            id: string,
            value: string,
            placeholder: string
        ) {
            this.element = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }


    //? Idea para la nueva clase InputElement

    const mySelect = new InputElement('o8932doiw', '', 'seleccione la opcion')

    console.log({ mySelect });

})()