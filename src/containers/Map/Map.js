import React, { Component } from 'react';
import { Map as LeafleatMap, TileLayer, Pane, Popup } from 'react-leaflet';
import './Map.scss';

const DEFAULT_VIEWPORT = {
	center: [51.505, -0.09],
	zoom: 13,
};

class Map extends Component {

	state = {
		lat: 45.073471,
		lng: 38.975367,
		zoom: 13,
		viewport: DEFAULT_VIEWPORT,
	}


	onClickReset = () => {
		this.setState({ viewport: DEFAULT_VIEWPORT })
	}

	onViewportChanged = viewport => {
		this.setState({ viewport })
	}
	

	render() {
		const position = [this.state.lat, this.state.lng];
		return (
            <div className="map">
				<LeafleatMap 
					onClick={this.onClickReset}
					onViewportChanged={this.onViewportChanged}
					viewport={this.state.viewport}>
					<TileLayer 
						attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</LeafleatMap>
            </div>
		);
	}
}

export default Map;
