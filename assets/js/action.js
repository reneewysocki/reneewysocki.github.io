$(document).ready(function () {

	console.log("Ready!");

	const portfolioItems = {
		1: {
			id: '01',
			title: 'BOOM!',
			client: 'TransWorld Manufacturing',
			date: 'July 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'assets/images/gd-portfolio/TWM-Boom.jpg',
			image1: 'assets/images/gd-portfolio/TWM-Boom-Square.jpg',
		},
		2: {
			id: '02',
			title: 'Spring is Coming',
			client: 'Transworld Manufacturing',
			date: 'April 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'assets/images/gd-portfolio/TWM-Spring/TWM-Spring.jpg',
			image1: 'assets/images/gd-portfolio/TWM-Spring/TWM-Spring2.jpg',
		},
		3: {
			id: '03',
			title: 'Game Changer',
			client: 'Pile Driving Solutions',
			date: 'July 2017',
			description: 'Half Page Magazine Ad Published in American Cranes & Transportation and International Cranes & Specialized Transport Magazine',
			mainImage: 'assets/images/gd-portfolio/PDS-Game-Changer.jpg',
		},
		4: {
			id: '04',
			title: "International Women's Day",
			client: 'Crane Network',
			date: 'March 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/CN-International-Womens-Day.jpg',
			image1: 'assets/images/gd-portfolio/CN-International-Womens-Day-Square.jpg',
		},
		5: {
			id: '05',
			title: "Crane Snapshot",
			client: 'Crane Network',
			date: 'August 2018',
			description: 'Full Page Print Advertisement Published in International Cranes & Specialized Transport Magazine',
			mainImage: 'assets/images/gd-portfolio/IC&ST-August-Full-Page-airbnb-snapshot-photo (2018_02_10 19_15_37 UTC).jpg',
		},
		6: {
			id: '06',
			title: "Ace in the Hole",
			client: 'Crane Network',
			date: 'March 2017',
			description: 'Half Page Print Advertisement Published in American Cranes & Transport Magazine for CONEXPO 2017',
			mainImage: 'assets/images/gd-portfolio/ACT-CN-CONEXPO (2018_02_10 20_30_25 UTC).jpg',
		},
		7: {
			id: '07',
			title: "Imperial Mosiac",
			client: 'Imperial Crane',
			date: 'March 2017',
			description: 'Full Page Print Advertisement Published in American Cranes & Transport Magazine',
			mainImage: 'assets/images/gd-portfolio/ACT-Imperial-ConExpo-Ad (2018_02_10 20_30_25 UTC).jpg',
		},
		8: {
			id: '08',
			title: 'Fabulous Boom Dollies',
			client: 'Transworld Manufacturing',
			date: 'March 2017',
			description: 'Social Media and Print Promotion for CONEXPO 2017',
			mainImage: 'assets/images/gd-portfolio/TWM-Conexpo.jpg',
			image1: 'assets/images/gd-portfolio/TWM-Conexpo-Square.jpg',
		},
		9: {
			id: '09',
			title: 'Custom Websites',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/Website-Linkedin-Promo (2018_02_10 18_36_35 UTC).png',
		},
		10: {
			id: '10',
			title: 'Custom Websites Flyer',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Printed Flyer Promotion',
			mainImage: 'assets/images/gd-portfolio/Website-Flyer (2018_02_10 19_15_37 UTC).jpg',
		},
		11: {
			id: '11',
			title: 'Peace, Joy & Cranes',
			client: 'Crane Network',
			date: 'December 2017',
			description: 'Web and Social Media Promotion for Christmas',
			mainImage: 'assets/images/gd-portfolio/Peace-Joy-and-Cranes---New-Customers (2018_02_10 18_36_35 UTC).jpg',
		},
		12: {
			id: '12',
			title: 'Back to the Grind',
			client: 'Crane Network',
			date: 'August 2017',
			description: 'Web and Social Media Promotion for Back to School Season',
			mainImage: 'assets/images/gd-portfolio/back-to-the-grind.jpg',
			image1: 'assets/images/gd-portfolio/back-to-the-grind-long.jpg'
		},
		13: {
			id: '13',
			title: 'Open House Invitation',
			client: 'Montgomery Cranes',
			date: 'November 2016',
			description: 'Open House Event Invitation',
			mainImage: 'assets/images/gd-portfolio/Merlo-Montgomery-Open-House-Invite (2018_02_10 18_36_35 UTC).jpg',
		},
		14: {
			id: '14',
			title: 'Merry Boom Dolly',
			client: 'TransWorld Manufacturing',
			date: 'December 2017',
			description: 'Christmas Social Media and Web Promotion',
			mainImage: 'assets/images/gd-portfolio/Merry-Boom-Dollies-Sweater-TWM (2018_06_05 20_43_50 UTC).jpg',
		},
		15: {
			id: '15',
			title: 'Wine Fusion Happy Hour',
			client: 'Grapevine Wine Tours',
			date: 'May 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/GWT-Wine-Fusion-Happy-Hour-Invitation (2018_06_06 21_47_54 UTC).jpg',
		},
		16: {
			id: '16',
			title: 'One Solution.',
			client: 'AMS Merlo',
			date: 'May 2018',
			description: 'Full Page Print Advertisement Published in <i>American Cranes & Transport</i> Magazine',
			mainImage: 'assets/images/gd-portfolio/Merlo-Full-Page-Ad-ACT-Sept-2016-(2018_06_05-20_43_50-UTC).jpg',
		},
		18: {
			id: '18',
			title: 'Happy New Year',
			client: 'Crane Network',
			date: 'December 2016',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/Happy-New-Year-GIF (2018_02_10 18_36_35 UTC).gif',
		},
		19: {
			id: '19',
			title: 'Things are Heating Up',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/heating-up-pool--jpg (2018_02_10 18_36_35 UTC).jpg',
		},
		20: {
			id: '20',
			title: 'Black Friday / Cyber Monday',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/CN-Black-Friday/black-friday-special-orange (2018_02_10 20_30_25 UTC).jpg',
			image1: 'assets/images/gd-portfolio/CN-Black-Friday/Cyber-Week-Special (2018_02_10 20_30_25 UTC).jpg'
		},
		21: {
			id: '21',
			title: 'Kick Off Football Season',
			client: 'Crane Network',
			date: 'September 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/Kick-Off-Football-Season (2018_02_10 20_30_25 UTC).jpg',
		},
		22: {
			id: '22',
			title: 'Corporate Excursions Flyer',
			client: 'Grapevine Wine Tours',
			date: 'October 2018',
			description: 'One Page Print Flyer Promotion',
			mainImage: 'assets/images/gd-portfolio/Corporate-Excursions/Corporate-Excursions-One-Page-Flyer.jpg',
			image1: 'assets/images/gd-portfolio/Corporate-Excursions/Corporate-Excursions-One-Page-Flyer-Back.jpg',
		},
		23: {
			id: '23',
			title: 'Corporate Excursions',
			client: 'Grapevine Wine Tours',
			date: 'October 2018',
			description: 'Tri-fold Brochure Print Promotion',
			mainImage: 'assets/images/gd-portfolio/Corporate-Excursions/GWT-Corporate-Excursion-Trifold-Brochure-1.jpg',
			image1: 'assets/images/gd-portfolio/Corporate-Excursions/GWT-Corporate-Excursion-Trifold-Brochure-2.jpg',
		},
		24: {
			id: '24',
			title: 'Valentines Getaway',
			client: 'Grapevine Wine Tours',
			date: 'February 2019',
			description: 'Weba and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/Valentines-Getaway-Giveaway.jpg',
		},
		25: {
			id: '25',
			title: 'Eat, Drink, and Be Merry',
			client: 'Crane Network',
			date: 'December 2018',
			description: 'Christmas Card',
			mainImage: 'assets/images/gd-portfolio/eat-drink-and-be-merry-christmas-card.jpg',
		},
		27: {
			id: '27',
			title: 'Eat, Drink, and Be Thankful',
			client: 'Grapevine Wine Tours',
			date: 'November 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/thanksgiving-eat-drink-and-be-thankful-v2.jpg',
		},
		28: {
			id: '28',
			title: 'Secure Your Future',
			client: 'DKM Insurance',
			date: 'March 2017',
			description: 'Full Page Print and Flyer Advertisement',
			mainImage: 'assets/images/gd-portfolio/dkm-insurance-flyer.jpg',
		},
		29: {
			id: '29',
			title: 'A World of Equipment at Your Fingertips',
			client: 'Crane Network',
			date: 'March 2016',
			description: 'Full Page Print Advertisement Published in International Cranes & Specialized Transportation Magazine',
			mainImage: 'assets/images/gd-portfolio/Full-Page-Equipment-Globe-Fingertips-Ad-ICST-March-PSD (2018_02_10 20_30_25 UTC).jpg',
		},
		30: {
			id: '30',
			title: 'Enter to Win',
			client: 'Crane Network',
			date: 'March 2018',
			description: 'Web and Social Media Contest Promotion',
			mainImage: 'assets/images/gd-portfolio/Crane-Network-Enter-to-Win (2018_06_06 20_47_35 UTC).jpg',
		},
	}


		for (prop in portfolioItems) {

			let portfolioCard = $("<div id='" + portfolioItems[prop].id + "' class='card'><img class='card-img-top' src='" + portfolioItems[prop].mainImage + "' alt='" + portfolioItems[prop].title + "' data-toggle='modal' data-target='#" + portfolioItems[prop].id + "Modal' /></div>'");

			let portfolioModal = $("<div class='modal fade' id='" + portfolioItems[prop].id + "Modal' tabindex='-1' role='dialog' aria-labelledby='" + portfolioItems[prop].id + "ModalTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-scrollable' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='" + portfolioItems[prop].id + "ModalTitle'>" + portfolioItems[prop].title + " </h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button></div><div class='modal-body'><p>" + portfolioItems[prop].description + "<br><br>" + portfolioItems[prop].date + "<br>" + portfolioItems[prop].client + "</p><img class='portfolio-img' src='" + portfolioItems[prop].mainImage + "' alt='" + portfolioItems[prop].title + "'></div><div class='modal-footer folio-date'>" + portfolioItems[prop].client + "&nbsp <b> " + portfolioItems[prop].date + "</b></div></div></div></div>")

			$("#gd-portfolio-div").append(portfolioCard, portfolioModal);
		}
			
});