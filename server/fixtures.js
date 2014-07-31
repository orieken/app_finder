if (Apartments.find().count() === 0) {
    Apartments.insert({
        name: 'Place 1',
        description: 'Big place',
        numberOfBedrooms: 4,
        price: '$2000',
        deposit: '$1200',
        size: '900',
        score: '4',
        address: {
            buildingNumber: '123',
            street: 'Street NE',
            city: 'ST',
            zipCode: '12345',
            neighborhood: 'Cabrini'
        },
        contactInfo: {
            name: '',
            email: '',
            phoneNumber: '123 123-4567'
        },
        availability: '02-22-2014',
        status: 'Empty',
        images: [
            { imageUrl: 'http://someimage.com/image/1.jpg' },
            { imageUrl: 'http://someimage.com/image/2.jpg' },
            { imageUrl: 'http://someimage.com/image/3.jpg' },
        ],
        mapCoords:{
            x: '123',
            y: '2123'
        },
        listingUrl: 'http://foo/'
    });

    Apartments.insert({
        name: 'Place 3',
        description: 'Small place',
        numberOfBedrooms: 4,
        price: '$2000',
        deposit: '$1200',
        size: '900',
        score: '2',
        address: {
            buildingNumber: '123',
            street: 'Street NE',
            city: 'ST',
            zipCode: '12345',
            neighborhood: 'Cabrini'
        },
        contactInfo: {
            name: '',
            email: '',
            phoneNumber: '123 123-4567'
        },
        availability: '02-22-2014',
        status: 'Empty',
        images: [
            { imageUrl: 'http://someimage.com/image/1.jpg' },
            { imageUrl: 'http://someimage.com/image/2.jpg' },
            { imageUrl: 'http://someimage.com/image/3.jpg' },
        ],
        mapCoords:{
            x: '123',
            y: '2123'
        },
        listingUrl: 'http://foo/'
    });

    Apartments.insert({
        name: 'Place 5',
        description: 'No place Like home',
        numberOfBedrooms: 4,
        price: '$2000',
        deposit: '$1200',
        size: '900',
        score: '5',
        address: {
            buildingNumber: '123',
            street: 'Street NE',
            city: 'ST',
            zipCode: '12345',
            neighborhood: 'Cabrini'
        },
        contactInfo: {
            name: '',
            email: '',
            phoneNumber: '123 123-4567'
        },
        availability: '02-22-2014',
        status: 'Empty',
        images: [
            { imageUrl: 'http://someimage.com/image/1.jpg' },
            { imageUrl: 'http://someimage.com/image/2.jpg' },
            { imageUrl: 'http://someimage.com/image/3.jpg' },
        ],
        mapCoords:{
            x: '123',
            y: '2123'
        },
        listingUrl: 'http://foo/'
    });

}