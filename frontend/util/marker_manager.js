export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    this._benchesToAdd(benches).forEach(
      bench => this._createMarkerFromBench(bench)
    );
  }

  _benchesToAdd(benches) {
    const currentBenches = this.markers.map(
      marker => marker.benchId
    );
    return benches.filter(
      bench => !currentBenches.includes(bench.id)
    );
  }

  _createMarkerFromBench(bench) {
    const coordinate = {lat: bench.lat, lng: bench.lng};
    const marker = new google.maps.Marker({
      position: coordinate,
      map: this.map,
      benchId: bench.id,
      title: bench.description
    });

    this.markers.push(marker);
  }
}
