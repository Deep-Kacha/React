// create a class based component named display123
// create a state variable with 50 records
// implement pagination to show 5 records per page
// add buttons to navigate to next and previous page
// display current page number and total number of pages
// when user is on first page , disable previous button
// when user is on last page , disable next button

// this are the state variables needed :
// records(aaray), currentpage (number), recordsPage(number)
// totalPages(number), displayedRecords(array)


import { Component } from "react";

class Display123 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
        "1 | Amit Sharma | 28 | M | Delhi | Delhi | 9876543210",
        "2 | Priya Verma | 25 | F | Lucknow | Uttar Pradesh | 9123456780",
        "3 | Rahul Mehta | 32 | M | Ahmedabad | Gujarat | 9988776655",
        "4 | Sneha Iyer | 27 | F | Chennai | Tamil Nadu | 9012345678",
        "5 | Rohit Patil | 35 | M | Pune | Maharashtra | 9090909090",
        "6 | Neha Gupta | 29 | F | Jaipur | Rajasthan | 9345678901",
        "7 | Arjun Reddy | 31 | M | Hyderabad | Telangana | 9876501234",
        "8 | Kavya Nair | 26 | F | Kochi | Kerala | 9567890123",
        "9 | Sanjay Singh | 40 | M | Bhopal | Madhya Pradesh | 9823012345",
        "10 | Pooja Malhotra | 34 | F | Chandigarh | Punjab | 9811122233",
        "11 | Vikas Yadav | 23 | M | Gurugram | Haryana | 9998887776",
        "12 | Anjali Mishra | 28 | F | Prayagraj | Uttar Pradesh | 9701234567",
        "13 | Rakesh Das | 37 | M | Kolkata | West Bengal | 9830011223",
        "14 | Nisha Kulkarni | 33 | F | Nashik | Maharashtra | 9423456789",
        "15 | Mohit Jain | 30 | M | Indore | Madhya Pradesh | 9301122334",
        "16 | Shalini Roy | 27 | F | Durgapur | West Bengal | 9834567890",
        "17 | Karan Khanna | 36 | M | Amritsar | Punjab | 9877012345",
        "18 | Divya Choudhary | 24 | F | Kota | Rajasthan | 9784512369",
        "19 | Suresh Rao | 45 | M | Mangaluru | Karnataka | 9448123456",
        "20 | Ritu Saxena | 38 | F | Noida | Uttar Pradesh | 9810098100",
        "21 | Akash Pandey | 26 | M | Varanasi | Uttar Pradesh | 9797979797",
        "22 | Meenal Joshi | 31 | F | Udaipur | Rajasthan | 9356789012",
        "23 | Deepak Kumar | 41 | M | Patna | Bihar | 9934123456",
        "24 | Swati Banerjee | 29 | F | Howrah | West Bengal | 9873216540",
        "25 | Nitin Bansal | 34 | M | Panipat | Haryana | 9056781234",
        "26 | Aishwarya Pillai | 28 | F | Trivandrum | Kerala | 9847012345",
        "27 | Prakash Sahu | 39 | M | Raipur | Chhattisgarh | 9753124680",
        "28 | Tanya Arora | 22 | F | Faridabad | Haryana | 9911223344",
        "29 | Vinod Mishra | 44 | M | Rewa | Madhya Pradesh | 9425123456",
        "30 | Radhika Sen | 35 | F | Siliguri | West Bengal | 9734567891",
        "31 | Harsh Vardhan | 27 | M | Kanpur | Uttar Pradesh | 8899001122",
        "32 | Komal Khatri | 32 | F | Hisar | Haryana | 9723456780",
        "33 | Manoj Tiwari | 48 | M | Gorakhpur | Uttar Pradesh | 9838123456",
        "34 | Isha Kapoor | 26 | F | Jalandhar | Punjab | 9876540099",
        "35 | Pankaj Solanki | 37 | M | Vadodara | Gujarat | 9898123456",
        "36 | Shreya Bose | 24 | F | Barrackpore | West Bengal | 9678901234",
        "37 | Alok Srivastava | 42 | M | Faizabad | Uttar Pradesh | 9415012345",
        "38 | Preeti Ahuja | 34 | F | Rohtak | Haryana | 9812345671",
        "39 | Sunil Chatterjee | 50 | M | Asansol | West Bengal | 9434567890",
        "40 | Bhavya Shah | 29 | F | Surat | Gujarat | 9727012345",
        "41 | Rohan Kuldeep | 21 | M | Ajmer | Rajasthan | 8899123456",
        "42 | Monika Thakur | 36 | F | Shimla | Himachal Pradesh | 9805012345",
        "43 | Ajay Patel | 46 | M | Anand | Gujarat | 9825212345",
        "44 | Seema Kaur | 41 | F | Ludhiana | Punjab | 9878012345",
        "45 | Ashish Rawat | 33 | M | Dehradun | Uttarakhand | 9760123456",
        "46 | Pinal Desai | 28 | F | Navsari | Gujarat | 9098123456",
        "47 | Mahesh Naik | 52 | M | Karwar | Karnataka | 9449012345",
        "48 | Reena Dutta | 39 | F | Tezpur | Assam | 9954012345",
        "49 | Saurabh Goyal | 35 | M | Meerut | Uttar Pradesh | 9837012345",
        "50 | Anupama Menon | 44 | F | Palakkad | Kerala | 9847123456",

      ],
      currentPage: 1,
      recordsPerPage: 5
    };
  }
    get totalPages() {
    return Math.ceil(this.state.records.length / this.state.recordsPerPage);
    }
    get displayedRecords() {
    const startIndex = (this.state.currentPage - 1) * this.state.recordsPerPage;
    const endIndex = startIndex + this.state.recordsPerPage;
    return this.state.records.slice(startIndex, endIndex);
    }
    handleNext = () => {
    if (this.state.currentPage < this.totalPages) {
    this.setState({ currentPage: this.state.currentPage + 1 });
    }
    };
    handlePrevious = () => {
    if (this.state.currentPage > 1) {
    this.setState({ currentPage: this.state.currentPage - 1 });
    }
    };
    render() {
    return (
      <div align="center">
        <h2>User Data Showcase Using Pageation</h2>
        <div>
          {this.displayedRecords.map((record, index) => (
            <div key={index}>{record}</div>
          ))}
        </div>
        <div>
          <button onClick={this.handlePrevious} disabled={this.state.currentPage === 1}>
            Prev
          </button>
          <span>Page {this.state.currentPage} of {this.totalPages}</span>
          <button onClick={this.handleNext} disabled={this.state.currentPage === this.totalPages}>
            Next
          </button>
        </div>
      </div>
    );
    }
}

export default Display123;