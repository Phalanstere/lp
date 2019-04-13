
// gets a list of objects
function Indexer(list) {

var self = this;

this.index = [];
this.index_list = [];




this.find_index_entry = function(value) {
    // console.log(value);
    for (var v = 0; v < this.index.length; v++ )   {
        var entry = this.index[v];
        if (entry.value === value) return entry;
    }
}


// Falls ein Suchfeld ein Array ist
this.check_array = function( list, id, name) {
    for (var k = 0; k < list.length; k++) {
        var item = list[k];

        if (! this.index_list.includes( item )   ) 
            {
            this.index_list.push(item);
            var el = {
                     value: item,
                     occurrence: [{
                                id:     id,
                                name:   name
                                }]
                    }
            this.index.push(el);
        }
        else {
             var entry = this.find_index_entry(item);
             var oc = {
                     id: id,
                     name: name
                      }
             entry.occurrence.push(oc); 
             }
    }

}




// kämmt das Objekt mit all seinen Suchfeldern duzrch
this.apply_search = function(obj, field, id, name) {
    var search = obj[field];
    if (search)
     {
     if ( Array.isArray( search  )   ) this.check_array( search, id, name)
     else 
        {
        if (! this.index_list.includes( search )   ) {
                this.index_list.push(search);

                    
                var el = {
                     value: search,
                     occurrence: [{
                                id:     id,
                                name:   name
                                }]
                     
                    }
                this.index.push(el);

            }
            else {
                var entry = this.find_index_entry(search);
                var oc = {
                         id: id,
                         name: name
                         }
                entry.occurrence.push(oc);          
                }
             
        }
    }
    // dem Fall abdecken, dass es kein Array ist;
}


this.collect_items = function(obj) {

  // cycle throgh the various lists
   for (var j = 0; j < obj.list.length; j++) {
        // takes a list
        var o = obj.list[j];


        for (var k = 0; k < obj.fields.length; k++) 
            {
            var field = obj.fields[k];
            this.apply_search(o, field, j, obj.name);  // j is the objects id
            }
   }


 
}



this.init = function() {
    for (var i = 0; i < list.length; i++) {
        {
        var l = list[i];
        this.collect_items(l);
        }
    }

}



self.init();
}




export default Indexer;