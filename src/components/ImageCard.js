import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSpans);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSpans);
  }

  setSpans = () => {
    const { clientHeight } = this.imageRef.current;
    const spans = Math.round(clientHeight / 5) + 2;
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          onLoad={this.setSpans}
        />
      </div>
    );
  }
}

export default ImageCard;
