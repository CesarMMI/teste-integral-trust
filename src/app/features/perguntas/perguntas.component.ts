import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class PerguntasComponent {
  items = [
    {
      active: false,
      question: 'Nunc a eros neque ?',
      answer:
        'Aenean laoreet fringilla arcu, quis consequat odio varius a. Proin pulvinar quis velit at auctor. Vivamus hendrerit tempor lorem. Nam sit amet quam id augue vulputate gravida a et ex. Ut dignissim ut.',
    },
    {
      active: false,
      question: 'Phasellus venenatis consequat rutrum ?',
      answer:
        'Proin et ante a libero rhoncus faucibus. Etiam ac ligula volutpat, congue nisl non, tristique ipsum. Integer facilisis venenatis viverra. Donec varius euismod erat eu malesuada. Sed eu porta accumsan.',
    },
    {
      active: false,
      question: 'Pellentesque nec semper arcu ?',
      answer:
        'Maecenas vitae molestie elit. Donec sed lacinia eros. Curabitur quis ornare neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ex ligula, maximus id pharetra.',
    },
    {
      active: false,
      question: 'Vestibulum non suscipit ex ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lacinia leo nec aliquet. In ut massa luctus, facilisis diam vel, suscipit purus. Aenean porta tincidunt ligula et efficitur.',
    },
    {
      active: false,
      question: 'Morbi a blandit sem ?',
      answer:
        'Praesent vitae nunc ex. Pellentesque pharetra ornare ligula eget interdum. Nulla lorem sapien, convallis sit amet tortor eu, rutrum tristique nunc. Integer lorem elit, aliquam quis posuere in posuere.',
    },
  ];
}
