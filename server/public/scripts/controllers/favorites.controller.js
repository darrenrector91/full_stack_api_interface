starwarsApp.controller("FavoritesController", ['SwapiService', function (SwapiService, $mdToast) {
    console.log('FavoritesController loaded');
    
    const self = this;

    self.favorites = SwapiService.favorites;
    self.favoriteCount = SwapiService.favoriteCount;
    self.results = SwapiService.getFavorites;

    // run the getFavorites function
    self.getFavorites = function () {
        SwapiService.getFavorites();
    }

    // delete Favorite
    self.deleteFavorite = function (favId) {
        SwapiService.deleteFavorite(favId);
        
    }

    // favorites count total function
    self.favoriteCount = function () {
        SwapiService.favoriteCount();
    }

    self.getFavorites();
}]);