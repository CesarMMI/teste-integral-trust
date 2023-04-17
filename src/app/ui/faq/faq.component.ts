import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FaqItemComponent, IFaqItem } from './faq-item/faq-item.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FaqItemComponent],
})
export class FaqComponent {
  items: IFaqItem[] = [
    {
      question: 'Nunc a eros neque ?',
      answer:
        'Aenean laoreet fringilla arcu, quis consequat odio varius a. Proin pulvinar quis velit at auctor. Vivamus hendrerit tempor lorem. Nam sit amet quam id augue vulputate gravida a et ex. Ut dignissim ut.',
    },
    {
      question: 'Phasellus venenatis consequat rutrum ?',
      answer:
        'Proin et ante a libero rhoncus faucibus. Etiam ac ligula volutpat, congue nisl non, tristique ipsum. Integer facilisis venenatis viverra. Donec varius euismod erat eu malesuada. Sed eu porta accumsan.',
    },
    {
      question: 'Pellentesque nec semper arcu ?',
      answer:
        'Maecenas vitae molestie elit. Donec sed lacinia eros. Curabitur quis ornare neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ex ligula, maximus id pharetra.',
    },
    {
      question: 'Vestibulum non suscipit ex ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lacinia leo nec aliquet. In ut massa luctus, facilisis diam vel, suscipit purus. Aenean porta tincidunt ligula et efficitur.',
    },
    {
      question: 'Morbi a blandit sem ?',
      answer:
        'Praesent vitae nunc ex. Pellentesque pharetra ornare ligula eget interdum. Nulla lorem sapien, convallis sit amet tortor eu, rutrum tristique nunc. Integer lorem elit, aliquam quis posuere in posuere.',
    },
  ];
}
