import { Component, Inject, Output, EventEmitter, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../service/clients/clients.service';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrl: './addclient.component.css'
})
export class AddclientComponent {
  clientForm: FormGroup;
  @Output() closeModalEvent = new EventEmitter<any>();
  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.dialogRef.close();  // Cierra el modal al presionar Escape
  }
  constructor(
    public dialogRef: MatDialogRef<AddclientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private clientsService: ClientsService
  ) {
    this.clientForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: [''],
      telefono: ['', [ Validators.pattern(/^\d{7,10}$/)]],
      correo: ['', [Validators.email]],
      fechaNacimiento: [''], 
    });
  }

  onClose(close: boolean): void {
    this.closeModal(this.clientForm.value, close);
    this.dialogRef.close();
  }

  closeModal(data: any, close: boolean): void {
    const datos = { data: data, close: close };
    this.closeModalEvent.emit({ data: datos });
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  saveClient() { 

    this.clientsService.saveClient(this.clientForm.value)
      .then(response => {
        console.log('Client saved successfully:', response);
      })
      .catch(error => {
        console.error('Error saving client:', error);
      });
  }
}
