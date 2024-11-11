import React from 'react';
import { Offer } from '../DataTypes/offerTypes/offer-type.ts';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../DataTypes/AppRoutes.tsx';

interface PlaceCardInfo {
    offers: Offer;
}

export function PlaceCard({
  offers
}: PlaceCardInfo): React.JSX.Element {
  return (
    <article className="cities__card place-card">
      {offers.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoutes.OfferPage}/${offers.id}`}>
          <img className="place-card__image" src={`../../markup/img/${offers.previewImg}`} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offers.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offers.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width:`${offers.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.OfferPage}/${offers.id}`}>{offers.name}</Link>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}
