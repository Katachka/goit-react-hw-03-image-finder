import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { fetchImages } from '../ services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { AppContainer } from './App.styled';


let page = 1;

class App extends Component {
  state = {
    inputData: '',
    items: [],

    status: 'idle',
    totalHits: 0,
  };

  handleSubmit = async inputData => {
    page = 1;
    if (inputData.trim() === '') {
       toast.warning('You cannot search by empty field, try again.');
      return;
    } else {
      try {
        this.setState({ status: 'pending' });
        const { totalHits, hits } = await fetchImages(inputData, page);
        if (hits.length < 1) {
          this.setState({ status: 'idle' });
         
        } else {
          this.setState({
            items: hits,
            inputData,
            totalHits: totalHits,
            status: 'resolved',
          });
          toast.success(`We found ${hits.length} out of ${totalHits} images matching "${inputData}"`);
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
          toast.error(
            'Sorry, there are no images matching your search query. Please, try again.'
          );
      }
    }
  };
  onNextPage = async () => {
    this.setState({ status: 'pending' });

    try {
      const { hits } = await fetchImages(this.state.inputData, (page += 1));
      this.setState(prevState => ({
        items: [...prevState.items, ...hits],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };

  render() {
    const { totalHits, status, items } = this.state;
    if (status === 'idle') {
      return (
        <AppContainer>
          <Searchbar onSubmit={this.handleSubmit} />
        </AppContainer>
      );
    }
    if (status === 'pending') {
      return (
        <AppContainer>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery page={page} items={this.state.items} />
          <Loader />
          {totalHits > 12 && <Button onClick={this.onNextPage} />}
        </AppContainer>
      );
    }
    if (status === 'rejected') {
      return (
        <AppContainer>
          <Searchbar onSubmit={this.handleSubmit} />
          <p>Something wrong, try later</p>
        </AppContainer>
      );
    }
    if (status === 'resolved') {
      return (
        <AppContainer>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery page={page} items={this.state.items} />
          {totalHits > 12 && totalHits > items.length && (
            <Button onClick={this.onNextPage} />
          )}
             <ToastContainer />
        </AppContainer>
      );
    }
  }
}
export default App;
