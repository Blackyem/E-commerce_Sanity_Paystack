
export const handlePayment = ( email, amount ) => {

    const handler = PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACKPOP_SECRET_KEY , // Replace with your public key
      email,
      amount: amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
      currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
      ref: '', // Replace with a reference you generated
      callback: (response) => {
        //this happens after the payment is completed successfully
        const reference = response.reference;
        alert('Payment complete! Reference: ' + reference);
        window.location = "/success"

        // Make an AJAX call to your server with the reference to verify the transaction
      },
      onClose: () => {
        alert('Window closed.');
      },
    });
    handler.openIframe();
  }