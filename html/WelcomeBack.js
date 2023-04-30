class WelcomeBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'J',
            apppVersion: '1'
        }
    }

    render() {
        return (
            <>
                <h2>Hello!</h2>
                <p>Click the button below to begin your download.</p>
                <CoolButton customText={this.state.apppVersion && this.state.apppVersion < 2 ? 'Download v2' : 'Download'} />
            </>
        )
    }


}