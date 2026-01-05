export const OrderInvoiceTemplate = ({ bookingData, orderId }) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="display: flex; justify-content: center; align-items: center;">
        <img width="50px" src="https://i.ibb.co.com/HTjN97rS/logo.png" alt="brand logo" />
        <h2 style="color: oklch(65% 0.12 230); margin: 0;">Care.xyz</h2>
        </div>
        <p style="color: #666; font-size: 14px;">Order Invoice & Confirmation</p>
      </div>

      <div style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f4f4f4;">
        <p style="margin: 5px 0;"><strong>Order ID:</strong> <span style="color: #6501e6;">#${orderId}</span></p>
        <p style="margin: 5px 0;"><strong>Customer:</strong> ${bookingData.email}</p>
        <p style="margin: 5px 0;"><strong>Location:</strong> ${bookingData.area}, ${bookingData.city}, ${bookingData.division}</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr style="background-color: oklch(97% 0.01 240); color: oklch(25% 0.04 240);">
            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Service Description</th>
            <th style="padding: 12px; border: 1px solid #ddd; text-align: right;">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;">
              <div style="font-weight: bold;">${bookingData.service_name}</div>
              <div style="font-size: 12px; color: #777;">Status: ${bookingData.status}</div>
            </td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: right; font-weight: bold;">
              BDT ${bookingData.totalCost}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr style="background-color: #fcfcfc;">
            <td style="padding: 12px; font-weight: bold; text-align: right; border: 1px solid #ddd;">Grand Total:</td>
            <td style="padding: 12px; font-weight: bold; text-align: right; color: oklch(65% 0.12 230); border: 1px solid #ddd; font-size: 18px;">
              BDT ${bookingData.totalCost}
            </td>
          </tr>
        </tfoot>
      </table>
      
      <div style="margin-top: 30px; text-align: center;">
        <p style="font-size: 14px; color: #444;">Need help? Contact us at <strong>support@care.xyz</strong></p>
        <p style="font-size: 12px; color: #888; margin-top: 10px;">
          Thank you for choosing <strong>Care.xyz</strong>!
        </p>
      </div>
    </div>
  `;
};