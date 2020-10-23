/**
 * Created by jai on 11/12/19.
 */
import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongDetail = ({ song }) => {
	if(!song) {
		return <div>Select a song</div>
	}

	return (
		<div>
			<h3>Details for:</h3>
			<p>
				Title: {song.title}
				<br />
				Duration: {song.duration}
			</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
