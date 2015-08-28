'use strict';

/**
 * @ngdoc service
 * @name pillarsApp.translate
 * @description
 * # translate
 * Service in the pillarsApp.
 */

angular.module('pillarsApp')
  .service('translate', function () {
  	 // dummyData for testing
	var dummyData = {
	  en: {
	      'pillars': [
	        {
	          'title': 'Health',
	          'content': 'Health content is here.',
	          'url': '/health'
	        },
	        {
	          'title': 'Wealth',
	          'content': 'Wealth content is here.',
	          'url': '/wealth'
	        },
	        {
	          'title': 'Life',
	          'content': 'Life content is here.',
	          'url': '/life'
	        },
	        {
	          'title': 'Work',
	          'content': 'Work content is here.',
	          'url': '/work'
	        }
	      ]
	    },
	  es: {
	      'pillars': [
	        {
	          'title': 'Salud',
	          'content': 'el contenido de la Salud está aquí.',
	          'url': '/health'
	        },
	        {
	          'title': 'La riqueza',
	          'content': 'La riqueza de contenido está aquí.',
	          'url': '/wealth'
	        },
	        {
	          'title': 'La vida',
	          'content': 'La vida es el contenido aquí.',
	          'url': '/life'
	        },
	        {
	          'title': 'Trabajo',
	          'content': 'Contenido del trabajo está aquí.',
	          'url': '/work'
	        }
	      ]
	    }
	};

    // AngularJS will instantiate a singleton by calling "new" on this function
	var pageContent = {};
	var translatedContent = function(lan){
		lan = lan || 'en';
		pageContent = dummyData[lan];
		return pageContent;	
	};

	return {
		translatedContent: translatedContent
	};    
  });

