import React from 'react';
import NavigationBar from './components/NavigationBar';
import HeaderImage from './components/HeaderImage';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import SubscriptionBar from './components/SubscriptionBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <HeaderImage />
      <FeaturedArticles />
      <FeaturedTutorials />
      <SubscriptionBar />
      <Footer />
    </div>
  );
}

export default App;
