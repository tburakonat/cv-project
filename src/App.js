import EditWindow from './components/EditWindow';

function App() {
	return (
		<div className="ui divided stackable grid container" style={{ marginTop: '50px' }}>
			<div className="row">
				<div className="eight wide column">
					<EditWindow />
				</div>
			</div>
		</div>
	);
}

export default App;
