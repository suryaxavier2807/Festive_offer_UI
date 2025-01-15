import gift from '../assets/gift.jpg'

export default function Advertisement(){
    return(
        <div className="bg-red-400 flex justify-between rounded-lg mt-2">
            <div className='ml-2 mt-2'>
                <p className='text-xs text-yellow-200' >Limited Time Festive Offer</p>
                <h2 className='text-white font-medium'>Discover exclusive festive offers crafted just for you</h2>
                <div><button className='bg-white text-red-500 rounded-lg pl-1 pr-1 pb-1 mt-1 font-medium'>Tap to Reveal!</button></div>

            </div>
            <div><img className='mix-blend-multiply w-36 size-28' src={gift} alt="" /></div>
            
            </div>
    )
}