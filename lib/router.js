Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('apartmentList', {
        path: '/'
    });

    this.route('apartmentPage', {
        path: 'apartments/:_id',
        data: function () {
            return Apartments.findOne(this.params._id);
        }
    });

    this.route('apartmentEdit', {
        path: 'apartments/:_id/edit',
        data: function () {
            return Apartments.findOne(this.params._id);
        }
    });
});
