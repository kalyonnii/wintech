import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeTab = 'crm';
carouselImages = [
  'assets/images/1.png',
  'assets/images/2.png',
  'assets/images/3.png'
];
  leadsManaged = 250000;
  employeesManaged = 12000; isMobileMenuActive = false;
  clients = 300;
  title = "wintech"
  faqs = [
    { question: 'Is the CRM customizable?', answer: 'Yes, it can be fully customized.', open: false },
    { question: 'Does HRM support payroll?', answer: 'Yes, our HRM has payroll, leave, and compliance features.', open: false },
    { question: 'Is there a free trial?', answer: 'Yes, 14-day free trial is available.', open: false }
  ];
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'About Us', routerLink: '/about' },
      { label: 'Services', routerLink: '/services' },
      {
        label: 'Products',
        icon: 'pi pi-chevron-down',
        items: [
          { label: 'CRM', routerLink: '/crm' },
          { label: 'HRM', routerLink: '/hrm' },
          { label: 'DSA CRM', routerLink: '/dsa-crm' }
        ]
      },
      { label: 'Contact', routerLink: '/contact' }
    ];
  }



  // Toggle the mobile menu visibility
  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
  submitContactForm(form: any) {
    if (form.valid) {
      alert('Form submitted! We will contact you soon.');
      form.reset();
    }
  }
  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}
