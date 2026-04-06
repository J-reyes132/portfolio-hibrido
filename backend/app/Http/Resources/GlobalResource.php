<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\NavItem;
use App\Models\SocialLink;

class GlobalResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'navigation' => [
                'siteName' => 'Juan Reyes',
                'ctaText' => 'Hire Me',
                'items' => NavItem::where('is_active', true)->orderBy('order')->get()->map(fn($item) => [
                    'id' => $item->id,
                    'href' => $item->href,
                    'label' => $item->label,
                ]),
            ],
            'footer' => [
                'brandName' => 'JUAN MANUEL',
                'brandHighlight' => 'REYES FELIZ.',
                'copyright' => '© 2024 Juan Manuel Reyes Feliz. Built with Precision.',
                'socialLinks' => SocialLink::orderBy('order')->get()->map(fn($link) => [
                    'id' => $link->id,
                    'name' => $link->name,
                    'url' => $link->url,
                ]),
            ],
        ];
    }
}
