import React from 'react'

function LocationMap() {
    return (
        <section>
            <div className="container">
                <div className="locationMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542187.3362392315!2d70.7513067!3d40.9796274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sru!2s!4v1724155391776!5m2!1sru!2s"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default LocationMap
