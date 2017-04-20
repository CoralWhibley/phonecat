describe('controller', function(){
	var $httpBackend, ctrl;
	var xyzPhoneData={
		name: 'phone xyz',
		images: ['image/url1.png', 'image/url2.png']
	};

	beforeEach(inject(function($componentController, _$httpBackend_, _$routeParams_){
		$httpBackend= _$httpBackend_;

		$httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);
	}));

	if('should fetch phone details', function(){
			expect(ctrl.phone).toBEUndefined();

			$httpBackend.flush();
			expect(ctrl.phone).toEqual(xyzPhoneData);
	});
});