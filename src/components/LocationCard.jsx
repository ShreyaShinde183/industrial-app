import React from 'react';

/**
 * Reusable LocationCard Component for Map Popups and Location Details - MAP FILTERS
 */
export const LocationCard = ({ location, onViewDetails }) => {
    if (!location) return null;

    return (
        <div className="mapfil-location-card">
            <div className="loc-card-header">
                <span className="loc-badge-type">{location.type}</span>
                {location.isHeadquarters && (
                    <span className="loc-badge-hq">Headquarters</span>
                )}
            </div>

            <h4 className="loc-name">{location.name}</h4>
            <p className="loc-city-country">{location.city}, {location.country}</p>

            <div className="loc-details-grid">
                <div className="loc-detail-row">
                    <span className="loc-label">Industry:</span>
                    <span className="loc-value">{location.industry}</span>
                </div>
                <div className="loc-detail-row">
                    <span className="loc-label">Type:</span>
                    <span className="loc-value">{location.type}</span>
                </div>
                {location.productCategory && (
                    <div className="loc-detail-row">
                        <span className="loc-label">Product:</span>
                        <span className="loc-value">{location.productCategory}</span>
                    </div>
                )}
                {location.certification && (
                    <div className="loc-detail-row">
                        <span className="loc-label">Certification:</span>
                        <span className="loc-value tag-cert">{location.certification}</span>
                    </div>
                )}
            </div>

            {location.address && (
                <p className="loc-address">📍 {location.address}</p>
            )}

            <div className="loc-card-footer">
                <button
                    type="button"
                    className="btn-view-details"
                    onClick={() => onViewDetails && onViewDetails(location)}
                >
                    View Details
                </button>
                {location.phone && (
                    <a href={`tel:${location.phone}`} className="btn-loc-call" title="Call">
                        📞
                    </a>
                )}
            </div>
        </div>
    );
};

export default LocationCard;
