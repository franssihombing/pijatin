import Navbar from "../components/Navbar";
import Footer from '../parts/Footer';
import { Link } from 'react-router-dom';


const Payment = () => {
    
    
    return (
        <>
            <Navbar />
            
            <div class="m-booking">
                <Link to={'/booking'} class="iconBack">
                    <svg width="15" height="38" viewBox="0 0 15 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5077 37.5102C12.1876 37.5115 11.8713 37.425 11.5821 37.2571C11.2929 37.0892 11.0381 36.8441 10.8365 36.5399L0.487428 20.8056C0.172283 20.3364 0 19.7478 0 19.1404C0 18.533 0.172283 17.9444 0.487428 17.4752L11.2007 1.74092C11.5644 1.20539 12.087 0.868609 12.6536 0.804676C13.2202 0.740743 13.7843 0.954891 14.2218 1.40001C14.6594 1.84513 14.9346 2.48476 14.9868 3.17818C15.0391 3.87161 14.8641 4.56203 14.5004 5.09757L4.92272 19.1535L14.179 33.2095C14.441 33.5944 14.6074 34.0631 14.6586 34.5602C14.7098 35.0573 14.6435 35.5619 14.4677 36.0143C14.2919 36.4667 14.0139 36.8481 13.6665 37.1132C13.3192 37.3783 12.917 37.516 12.5077 37.5102Z" fill="#466FC1"/>
                    </svg>
                </Link>

                <h1> Konfirmasi Pembayaran </h1>
                <div class="divpay">
                    <table class="tableConfirm">
                        <tr>
                            <td>Nama &nbsp;</td>
                            <td> : Jainudin</td>
                        </tr>
                        <tr>
                            <td>Jenis Layanan Pijat &nbsp;</td>
                            <td> : Pijat Aromaterapi</td>
                        </tr>
                        <tr>
                            <td>Durasi &nbsp;</td>
                            <td> : 60 Menit</td>
                        </tr>
                        <tr>
                            <td>Gender Terapis &nbsp;</td>
                            <td> : Pria</td>
                        </tr>
                        <tr>
                            <td>Waktu &nbsp;</td>
                            <td> : 12:00 pm</td>
                        </tr>
                        <tr>
                            <td>Lokasi &nbsp;</td>
                            <td> : Jakarta</td>
                        </tr>
                        <tr>
                            <td>Rincian Pembayaran &nbsp;</td>
                            <td> : <label> <i>Pijat Aromaterapi - Rp. 120.000</i> </label> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> : <label> <i>Platform fee - Rp. 2.000</i> </label> </td>
                        </tr>    

                        <tr>
                            <td>Total Pembayaran &nbsp;</td>
                            <td> : <label> <b>Rp. 122.000</b> </label> </td>
                        </tr>
                        <tr>
                            <td>Status Pembayaran &nbsp;</td>
                            <td> : <label> <b><u> Perlu Dibayar </u></b> </label> </td>
                        </tr>

                    </table>
                </div>

                <h1> Metode Pembayaran </h1>
                <div class="divpay">
                    <div class="payment">
                        <div>
                            <img src="gopay.svg" alt="" />
                        </div>
                        <div>
                            <img src="ovo.svg" alt="" />
                        </div>
                        <div>
                            <img src="dana.svg" alt="" />
                        </div>
                        <div>
                            <img src="bank.svg" alt="" />
                        </div>
                        <div>
                            <img src="visa.svg" alt="" />
                        </div>
                        <div>
                            <img src="master.svg" alt="" />
                        </div>
                    </div>
                </div>
             

                <Link to={'/confirm-payment'}>
                    <button class="selanjutnya" style={{ background: '#466FC1', color: '#fff', borderRadius: '0.5rem', padding: '1rem 5rem', }} >
                        Pesan Sekarang
                    </button>
                </Link>
            
            </div>

            <Footer />
        </>
    )
}


export default Payment 