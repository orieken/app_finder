(function () {
    describe("apartmentList template", function(){
        it("is defined", function(){
            expect(Template.apartmentList).toBeDefined();
        });

        xit("has a list of aparments", function(){
            console.log(Template.apartmentList.apartments());
            expect(Template.apartmentList.apartments()).toBe(3)
        });
    });
})();