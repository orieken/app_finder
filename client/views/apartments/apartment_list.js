Template.apartmentList.helpers({
    apartments: function(){
        return Apartments.find({}, { sort: { submitted: -1}});
    }
});
